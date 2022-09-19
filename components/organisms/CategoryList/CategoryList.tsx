import Card from 'components/molecules/Card'

import styles from './CategoryList.module.scss'

const Cards: Card[] = [
  {
    image: '/Icon/people.svg',
    title: 'People',
    textButton: 'See all',
  },
  {
    image: '/Icon/nature.svg',
    title: 'Planet',
    textButton: 'See all',
  },
  {
    image: '/Icon/poem.svg',
    title: 'Starship',
    textButton: 'See all',
  },
]
const CategoryList = () => {
  return (
    <div className={styles.CategoryList}>
      {Cards.map((card, index) => (
        <Card
          key={index}
          image={card.image}
          title={card.title}
          textButton={card.textButton}
        />
      ))}
    </div>
  )
}

export default CategoryList
