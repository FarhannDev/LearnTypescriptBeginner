const _goInsideCinema = (ticket: any) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      !ticket
        ? reject(new Error('no ticket'))
        :    resolve('enjoy the movie')

    }, 1000);
  })
}

export default _goInsideCinema