---
published: false
---
Discord bots have become increasingly popular to develop due to the multitude of simple to set up libraries available out there, most notably is [discord.js](https://discord.js.org/#/), a JavaScript library built to make quick and easy discord bots. However, being a Java main, I have decided to undertake this task using the [JDA](https://github.com/DV8FromTheWorld/JDA) library.

## Making many mistakes
The majority of my time was invested into making the command framework to be as simple as possible. This is from a past experience attempting to create [Frost](https://github.com/woojiahao/Frost). 

In Frost, the command framework was heavily dependent on reading the command arguments and details from a JSON file (later moved to a database), after that, the command had to be evaluated in **2** different classes before being passed to a rightful handler class to execute the specified method.

What I described was a really simple breakdown of the initial command framework I had designed for Frost. As you can tell it is incredibly inefficient, messy and tideous to manage. For instance, to add a single new command to the bot, I had to update a maximum of 5 different locations before the command would be added.

1. The first location was adding the command to the database of the bot
2. Then, I would have to add the command found to the many switch statements I used
3. After that, I would have to add a method to handle the command.
4. If I had added a new category of commands, I would be required to add a completely new class, set up a new switch statement and specify the commands listener class to call this new category.

Another issue I had identified with Frost was the inadequate database access method. Within it, I was forced to craft every aspect of the SQL query which had made it extremely tideous, since a lot of repeated code was visibly forming and yet I had done nothing to stop it.

In my wishful attempt to simplify the process of making a discord bot, I had inadvertantly turned it into such a chore.

All of these made for an extremely unhappy experience creating and maintaining Frost, so I decided to close down this project (you can still view the source code to compare results).

## Improving from old errors
This was when I decided to start up [Passion](https://github.com/woojiahao/Passion), as another go at making a simple to use Discord bot. The first thing I had decided to focus on was improving the database access methods. 

### Perfecting database access
In order to improve database access, the most logical thing to do was to make the API handle all of the query creation and only pass in the data I was interested in. Let's take a look at the `.select()` method.

```java
@Override
public ResultSet select (String cols, String table, String where) throws SQLException {
	String query = "SELECT " + cols + " FROM " + table;
	if (!where.equals("")) {
		query += " WHERE " + where;
	}

	Statement statement = createStatement();
	return statement.executeQuery(query);
}
```
As you can see, rather than passing an entire SQL query to be executed, the new method only takes in the information I want to be bothered with, ie, the `cols` to select, `table` to select these data, and the `where` clause to be used. This change allowed me to specify queries like this:

```java
ResultSet macros = new IQueryData().select("*", "Macro", "guild_id = '" + guildId + "'");
```

As opposed to the original method:

```java
ResultSet macros = new IQueryData().select("SELECT * FROM Macro WHERE guild_id = '" + guildId + "'");
```

> Create API so that you don't get bogged down by unnecessary details

### Cleaning out the grit
The command framework was something I had the most amount of complains from Frost. It was unnecessarily complex and too unmaintainable, thus, I had also set out to improve Passion's command framework so that it was as idiot-proof as possible.

The first thing I did to improve this was provide a greater logical seperation between the different listeners, seeing as how my original allocation of the listeners wasn't intuitive. Thus, I decided to split the `onJoin`, `onLeave`, command invoke and macro invoke listeners, into their own listeners, to allow each to perform their job without overlapping with one another.

Next, in order to add commands much more easily, I decided to introduce the concept of a `CommandContainer`, where by I was able to add commands from multiple class (thus allowing for logical separation of the commands) whilst maintaining a central location to find these commands. With this, it was only logical to introduce a parent class that all Commands would derive from. 

This `Command` class provided a simple skeleton for what a basic command would look like. Any new commands to be added would simply create an anonymous inner class instance of a command, and through this way, I was able to specify the name, permissions, arguments as well as behaviour of that command in one location once.

Let's take a look a simple implementation of this new command framework, I will be using the `nuke` command as the example:

```java
CommandContainer.add(
	new Command("nuke", MODERATOR,
		new Argument.Builder().setType(ArgumentType.INT).setToOptional("5").setRange(1, 99).build()) {
		
      	@Override
		public void invoke (Guild guild, User sender, MessageChannel from, String... args) {

			int numberToNuke = Integer.parseInt(args[0]);

			TextChannel target = guild.getTextChannelById(from.getId());
			List<Message> messages = new MessageHistory(from)
						.retrievePast(numberToNuke + 1)
						.complete();
			target.deleteMessages(messages)
						.queue();
		}
	}
);
```
When you look at this declaration, it just *makes sense*. You know that you are adding a new command with the name `nuke`, which only `MODERATOR` and higher members can use. It takes in a single argument, which is an `INT` that can be `optional`, which, if left to be optional, will default to `5` and this argument must be kept within the range of `1 to 99`.

Just from the constructor, you are able to extract so much valuable information, and these are all visible at one glance, you do not need to make calls to a database (what Frost used to do) to check these details of the command.

Moving on to the `.invoke()` method, it is just as clear to work with. It receives just the right amount of information needed, ensuring you are able to act on these information. You don't need to bogged down with worrying about permissions, or validity of the arguments since those checks are all performed before the method can be called. (See `Listening to commands`)

### Listening to commands
What good is a command framework without a good way of processing the commands. By that, I mean handling all the gory details of managing whether the invoker of the command has enough permissions to access the command, checking to ensure all the necessary arguments are being passed to the command, etc.

This is where the `CommandListener` class comes into play, it performs all of these checking before the command is even invoked. It will fit all of the optional arguments if needed and merge any `sentence` arguments together. 

The area that I had to spend the most amount of time here was managing to polish the permission checking. The rules I had set for this system was such that a user whose role is lower than the intended permission would be denied permission. However, in the beginning, without any roles, even owners could not invoke the commands, so I had to also take into account whether the invoker is the owner.

```java
private boolean canInvokeCommand (Command c, Guild g, User invoker) {
	List<Role> invokerRoles = g.getMember(invoker).getRoles();

	if (g.getMember(invoker).isOwner()) return true;

	if (c.getMinimum() == PassionRole.MEMBER) return true;

	if (invokerRoles.size() == 0) return false;

	Role minimum = g.getRolesByName(c.getMinimum().getName(), true).get(0);

	int invokerPosition = invokerRoles.get(0).getPosition();
	int minimumPosition = minimum.getPosition();

	return invokerPosition >= minimumPosition;
}
```
From creating this command listener, I had also learnt to seperate a large method into smaller submethods. I was following the advice from [this book](https://www.amazon.com/Becoming-Better-Programmer-Handbook-People/dp/1491905530) I have been reading, in the book, the author mentioned a very simple, yet effective piece of advice:

> If a method performs 2 different jobs, they belong in their own methods

With this in mind, I decided to split the once long and untidy command listening method into many sub-methods, this had resulted in the actual method looking like this:

```java
@Override
public void onGuildMessageReceived (GuildMessageReceivedEvent event) {
	//...
  	Command c;
	if ((c = CommandContainer.find(commandUsed)) == null) {
		from.sendMessage("Unable to find command **" + commandUsed + "**").queue();
		return;
	}

	logUse(commandUsed, current, author, from);

	if (!canInvokeCommand(c, current, author)) {
		from.sendMessage("Did you think I would let you do that :thinking:").queue();
		return;
	}

	String[] arguments = extractArguments(message);

	if (c.getArguments().length == 0) {
		c.invoke(current, author, from);
		return;
	}

	if (!hasSufficientArguments(c, arguments)) {
		from.sendMessage("You have an insufficient amount of arguments.").queue();
		return;
	}

	String[] merged = mergeSentences(c, arguments);
	if (hasInvalidOptionalArguments(c, merged)) {
		from.sendMessage("Invalid optional arguments placed").queue();
		return;
	}

	String[] commandArgs = generateCommandArguments(c, merged);
	if (!c.hasValidArguments(commandArgs, current, from)) {
		return;
	}

		c.invoke(current, author, from, commandArgs);
}
```

You don't need to know what all of these sub-methods do, and yet, you are able to infer what each of them do. This has certainly made me appreciate well-named methods a lot more.

### Arguments and me
Another issue that was prevalent in Frost was the way arguments were handled. They had to first be extracted from a string, assigned to **one** of many argument types and it just created a lot of unnecessary loop arounds. Thus, in Passion, I attempted to devise a much simpler method of creating and specifying arguments that allowed for flexible arguments to be created, like using optional arguments and implementing ranges.

This was when I stumbled upon the builder pattern, which I had used to create these arguments. Since not all the arguments would be optional, or have a range, it did not make sense to create 5+ constructors just for these subtle nuances. Thus, by making a builder, I would be able to create what I need without adding additional overhead, like deciphering which constructor is used for what. This is accompanied with the `ArgumentType` enumeration that I used to specify the types of arguments it was, as well as specifying the argument checking.

### Ensuring quality arguments
To ensure the arguments passed in by the user is accurate and up to standard, there was a need to construct an efficient argument checking system. This was how the `ArgumentChecking` class came to be. At its simplest, it is just a map that stores each check for each argument type, so to perform a check, all you would need to do is:

```java
ArgumentChecking.getChecks().get(arguments[i].getType()).check(args[i], guild, from, arguments[i])
```

However, under the hood, there is a little more going on. Using lambdas, I was able to pass about the checking methods per argument type around without repeating the code. For instance, to perform a check on the entered `MEMBER_ID`, the check, which follows the `Checking` functional interface, is declared as such:

```java
private static boolean memberIdCheck (String arg, Guild guild, MessageChannel from, Argument argument) {
	if (guild.getMemberById(arg) == null) {
		from.sendMessage("Invalid user id: **" + arg + "** entered").queue();
		return false;
	}

	return true;
}
```

and it can be "linked" to the `ArgumentType.MEMBER_ID` in the map via this line:

```java
result.put(MEMBER_ID, ArgumentChecking::memberIdCheck);
```

## Conclusion
I learnt a great deal about programming concepts and effective software engineering practices from creating discord bots in Java, I have been and still am enjoying developing Passion, thus, it will be my long term project for a while. 

If you want to try Passion out for yourself, you can find the GitHub repository [here](https://github.com/woojiahao/Passion). I have tried to make a simple guide to install and use Passion.
