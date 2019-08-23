import * as R from 'ramda'
import { articles, authors, teams } from '../mock-data'

const filterArticlesByAuthor = (selectedValues: any, collection: any) => filterBy(R.prop('authors'), selectedValues, collection)

const authorWroteArticles = R.curry((author: string, publications: []) => R.pipe(R.cond([
  [R.equals(0),   R.always(`${author} wrote 0 articles`)],
  [R.equals(1),   R.always(`${author} wrote an article '${publications}'`)],
  [R.equals(2),   R.always(`${author} wrote articles '${R.join('\' and \'', publications)}'`)],
  [R.T,           R.always(`${author} wrote articles '${R.join('\', \'', R.slice(0, 2, publications))}' and ${R.length(publications) - 2} more`)],
// tslint:disable-next-line
]))(R.length(publications) as never))

const getTeamArticlesDescription = (teamId: number): string => {
  const { name: teamName, members } = findById(teamId, teams)
  const teamAuthors = mergeById(members, authors)
  const coAuthoredArticles = filterArticlesByAuthor(members, articles)

  const filteredArticlesByAuthor = R.compose(
    mapBy(R.prop('text')),
    (id: number) => filterArticlesByAuthor(R.of(id), articles),
  )

  const published = R.map(({ id, name }) =>
    authorWroteArticles(name, filteredArticlesByAuthor(id),
  ), teamAuthors)

return (
`
${R.join('\n', published)}
-----
Team '${teamName}' co-authored ${R.length(coAuthoredArticles)} out of ${R.length(articles)} articles.
`)

}

export default getTeamArticlesDescription

export const idEquals = (id: number) => R.propEq('id', id)
export const matchArrays = (selectedValues = [], collection: []) =>
  R.intersection(selectedValues, collection)

export const filterBy = R.curry((transform, selectedValues, collection) =>
  R.filter(e => matchArrays(transform(e), selectedValues).length > 0, collection))

export const mapBy = R.curry((transform, collection) =>
  R.map(e => transform(e), collection))

export const mergeBy = (transform: any, selectedValues: [], collections: []) => R.innerJoin(
  (collection, id) => transform(collection) === id,
  collections,
  selectedValues
)
export const findById = (id: number, collection: any[]) => R.find(idEquals(id), collection)
export const mergeById = (selectedValues: [], collection: any) => mergeBy(R.prop('id'), selectedValues, collection)
