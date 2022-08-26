const books = [
  {
    title: 'The Design of EveryDay Things',
    author: 'Don Norman',
    alreadyRead: false,
    img:
      'http://t2.gstatic.com/images?q=tbn:ANd9GcTQEZhxiVNZAeKa1dGfEzKwLXiyY_78i08Gfhwn53k-JYin9TDO',
  },
  {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true,
    img:
      'http://t2.gstatic.com/images?q=tbn:ANd9GcRqNE0qeS4ldVIC9DbGkx9MOwJ4WWKi6HVvtrtZ8XTKVodonSBy',
  },
  {
    title: 'Thinking with Type',
    author: 'Ellen Lupton',
    alreadyRead: true,
    img:
      'https://images-na.ssl-images-amazon.com/images/I/518%2BxIiELFL._SX258_BO1,204,203,200_.jpg',
  },
  {
    title: 'Eloquent JavaScript',
    author: 'Marijn Haverbeke',
    alreadyRead: false,
    img: 'https://eloquentjavascript.net/img/cover.jpg',
  },
]

// books.sort((a, b) => {
//   return a.author.localeCompare(b.author)
// })

// function inversName(name) {
//   let newName = name.map((ele) => {
//     return ele.author.split(' ').reverse().join(', ')
//   })
//   return newName.sort()
//   // let splitted = name.author.split(' ')
//   // let invert = splitted.reverse()
//   // let res = invert.join(', ')
//   // console.log(invert)
//   // return res
// }
// console.log(inversName(books))
function reVerseName(sortName) {
  let sortedName = sortName.split(' ').reverse().join(', ')
  return sortedName
}
// reVerseName(ele.author)
books.sort((a, b) => {
  let nameA = reVerseName(a.author)
  let nameB = reVerseName(b.author)

  return nameA.localeCompare(nameB)
})
console.log(books)

const Book = (data) => {
  const list = document.createElement('ul')
  list.style.listStyleType = 'none'
  for (let ele of data) {
    const item = document.createElement('li')
    const card = document.createElement('div')
    const image = document.createElement('img')
    //image.setAttribute('src','')
    const cardBody = document.createElement('div')
    const headerFive = document.createElement('h5')
    const para = document.createElement('p')
    const anchor = document.createElement('a')

    // Styling the Elements

    list.classList.add('book-list')
    //item.classList.add('book-list card-column')
    // card styling
    card.classList.add('card')
    card.style.width = '18rem'
    // item
    item.style.margin = '1rem 0'
    // image Styling
    image.classList.add('card-img-top')
    image.style.height = '22rem'
    image.style.border = 'solid gray'
    image.setAttribute('src', ele.img)
    // Card body
    cardBody.classList.add('card-body')
    // header 5 styling
    headerFive.classList.add('card-title')
    // Para styling
    para.classList.add('card-text')
    para.innerText = ele.title
    para.style.fontWeight = 'bold'
    // Author Tag
    let pAuthor = document.createElement('p')

    // pAuthor.innerHTML = ele.author
    pAuthor.innerHTML = reVerseName(ele.author)
    pAuthor.style.color = 'grey'
    // Anchor read Button

    anchor.classList.add('btn', 'btn-secondary')
    anchor.style.float = 'right'
    anchor.style.borderRadius = '0.5rem'
    anchor.innerText = ele.alreadyRead

    if (ele.alreadyRead) {
      anchor.classList.add('btn-success')

      anchor.innerHTML = 'Read'
    }

    if (!ele.alreadyRead) {
      anchor.classList.add('btn-secondary')
      anchor.innerHTML = 'To read'
    }

    // Appending the Elements

    cardBody.append(headerFive, para, pAuthor, anchor)
    card.append(image, cardBody)
    item.append(card)
    list.append(item)
    // Listing the card after Header
    const main = document.querySelector('.container')
    main.append(list)
  }
}
Book(books)
