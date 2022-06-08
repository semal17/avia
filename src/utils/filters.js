/**
 * Сортировка по полям (цена по возрастанию, цена по убыванию, по времени в пути)
 * @param arr – массив, который нужно отфильтровать
 * @param sort {'price-asc'|'price-desc'|'time'} – название сортировки
 * @returns {*[]}
 */
export function sortByField (arr, sort) {
  const copy = [...arr]

  switch (sort) {
    case 'price-asc':
      return copy.sort((a, b) => Number(a.flight.price.total.amount) - Number(b.flight.price.total.amount));
    case 'price-desc':
      return copy.sort((a, b) => Number(b.flight.price.total.amount) - Number(a.flight.price.total.amount));
    case 'time':
      return copy.sort((a, b) => Number(a.flight.legs[0].duration + a.flight.legs[1].duration) - Number(b.flight.legs[0].duration + b.flight.legs[1].duration));
    default:
      return arr
  }
}

/**
 * Сортировка по компании
 * @param arr – массив, который нужно отфильтровать
 * @param company – массив компаний
 * @returns {*[]}
 */
export function sortByCompany (arr, companies) {
  const copy = [...arr]

  if (!companies.length) {
    return copy
  }

  return copy.filter(ticket => companies.includes(ticket.flight.carrier.uid))
}

/**
 * Сортировка по пересадкам
 * @param arr – массив, который нужно отфильтровать
 * @param segments  – массив пересадок
 * @returns {*[]}
 */
export function sortBySegments (arr, segments) {
  const copy = [...arr]


  if (!segments.length) {
    return copy
  }

  let result = []

  for (const segment of segments) {
    switch (segment) {
      case 'one':
        result.push(...copy.filter(ticket => ticket.flight.legs[0].segments.length + ticket.flight.legs[1].segments.length === 4))
        break;
      case 'none':
        result.push(...copy.filter(ticket => ticket.flight.legs[0].segments.length + ticket.flight.legs[1].segments.length === 2))
        break;
      default:
        result.push(...copy)
    }
  }

  return result
}

/**
 * Сортировка по цене
 * @param arr – массив, который нужно отфильтровать
 * @param from – цена "От"
 * @param to – цена "До"
 * @returns {*[]}
 */
export function sortByPrice (arr, from, to) {
  const copy = [...arr]

  return copy.filter((item) => Number(item.flight.price.total.amount) >= from && Number(item.flight.price.total.amount) <= to);
}
