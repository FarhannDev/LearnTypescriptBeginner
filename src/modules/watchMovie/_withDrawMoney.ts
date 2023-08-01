const _withDrawMoney = (amount: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {    
      amount > 100
        ? reject(new Error('Not enough money to withdraw'))
        : resolve(amount)

    }, 1000);
  }) 
}

export default _withDrawMoney