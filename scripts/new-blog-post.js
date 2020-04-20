const fs = require('fs')
const readline = require('readline')

class PostDate {
  constructor() {
    const currentDate = new Date()
    this.day = currentDate.getDate().toString().padStart(2, '0')
    this.month = currentDate.getMonth().toString().padStart(2, '0')
    this.year = currentDate.getFullYear().toString()
  }

  format() {
    return `${this.year}-${this.month}-${this.day}`
  }
}

const postPath = '../src/posts/blog/'
const currentDate = new PostDate().format()
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.on('close', () => {
  process.exit(0)
})

const generateFilename = title => {
  const filename = `${currentDate}-${title}.md`
  console.log(`Blog post file name is: ${filename}`)
  return `${postPath}${filename}`
}

const generateFileContents = title => {
  console.log('Creating file content')
  const separator = '---'
  const contents = [
    separator,
    'published: false',
    `title: "${title}"`,
    `date: "${currentDate}"`,
    separator
  ]
  console.log('File content created')
  return contents.join('\n')
}

const createPost = title => {
  fs.appendFile(generateFilename(title), generateFileContents(title), err => {
    if (err) throw err
    console.log('Created post!')
    rl.close()
  })
}

rl.question('Post title :: ', title => {
  if (title.trim() === '') {
    console.log('Cannot have empty title')
    process.exit(0)
  }
  createPost(title)
})

