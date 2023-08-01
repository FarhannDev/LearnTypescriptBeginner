const _buyCinemaTicket = (money: any) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      money < 10
        ? reject(new Error('not enough money to buy ticket'))
        : resolve('ticket-1')
    }, 1000);
  })
}

export default _buyCinemaTicket