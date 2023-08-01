// Kuis Coding : Asynchronous Proses secara Berantai
export const buyTollRoadCard = (money: number) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      money >= 25
        ? resolve({ tollRoadCard: true, balance: 0 })
        : reject(new Error('Maaf, uang anda tidak mencukupi untuk membeli kartu!'))
    }, 500)
  })
}

export const topUpBalance = (card: any, amount: number) => {
  return new Promise((resolve, reject) => {
    if (card !== undefined || card !== null) {
      console.log('Mengisi saldo anda');
      resolve({ ...card, balance: card.balance + amount });
      return;
    }

    reject(new Error('Kartu tidak tersedia!'));
  })
}

export const useTollRoad = (card: any) => {
  const TOLL_PRICE = 10;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      card.balance < TOLL_PRICE
         ? reject(new Error('not enough balance'))
         : resolve(card.balance -= TOLL_PRICE)
    }, 500);
  })
}