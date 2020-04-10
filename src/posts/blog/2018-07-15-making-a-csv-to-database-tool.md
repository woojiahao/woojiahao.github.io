---
published: true
title: "Crafting a CSV to DB tool"
---
## Why make this?
This tool was originally meant to be used for a data science project of mine where I had to pull data from the internet down as `.csv` files and by reading the file, be able to convert it into a corresonding database table.

## Did I go overboard?
**Yes.** Most definitely. We were only tasked to make it work on the command line, _however_, I thought that it would not be fun at all since that kind of task would be rather mundane. Thus, I decided to add on some extra features to turn it into a fun project for me!

## What did I do?
In order for this task to be more fun to do, I decided to give myself a couple of restrictions and challenges:

1. Complete the application in 24 hours 
2. Use SQLAlchemy to read and write to the database instead of traditional queries
3. Actively use Git to checkpoint my progress
4. Use TkInter to create a GUI to accompany this application

## What did I accomplish?
I managed to complete the application in around **16 hours**. 

I learnt a lot about TkInter and SQLAlchemy and ORMs in general. 

I became pretty proficient with using Git and thinking of better descriptions for each of my commits.

Overall, I really enjoyed doing this challenge and it helped to reignite my coding high!

## Learning points
### TkInter
As mentioned previously, I had learnt a lot about the built-in GUI library for Python, [TkInter](https://wiki.python.org/moin/TkInter). I used the [TkInter tutorial book](http://effbot.org/tkinterbook/) on effbot.org. It had contained very concise and easy to understand explanations about the different widgets about TkInter.

Using this knowledge, the few most major accomplishments using TkInter was:

1. Dynamically create frames that was used to display the edit column info in the `ConvertSetupWindow`
2. Changing between frames and effectively building GUIs

### SQLAlchmey
Through continual application and reading up on the *very detailed* [documentation/reference](https://docs.sqlalchemy.org/en/latest/) that SQLAlchemy has to offer! I learnt all about how an ORM can operate. 

Accomplishments using SQLAlchemy:

1. Dynamically generate tables using the handy `type(name, bases, dict)` function that allows me to create a table without knowing the exact details of the table at once.

```python
attr_dict = {
  '__tablename__': 'Users', 
  id = Column(Integer, primary_key=True),
  name = Column(String(50))
}
table = type('UsersTable', (Base,), attr_dict)
```

2. Insert multiple rows of data into a table without having to write a single line of SQL, greatly speeding up the process.

```python
data = [
  [1, 'John Doe'],
  [2, 'Mary Anne'],
  [3, 'Peter Goh']
]
with engine.connect() as conn:
  for row in data:
    ins = tbl.insert(values=row)
    conn.execute(ins)
```

### Python
I also learnt a lot about the Python language and what it takes to write good code. I also managed to apply some fancy boolean algebra in my code to check if any checkboxes were selected. I also thought a method of finding out whether a combination of columns would be eligible as a Primary Key in the database! These were all things that I would have never thought about if not for this project.

## Conclusion
I really enjoyed making this project as it had not only helped me reignite my joy for coding, but also, provide me with valuable insight about Python and ORMs and it has made me appreciate how ORMs handle the heavy lifting for the users.

The repository is currently made private, however, once my assignment is over, I will be including the URL for it!
