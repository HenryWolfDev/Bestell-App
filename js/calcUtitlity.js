export class CalcUtility {
  static calcItemSum(price, quantity) {
    const sum = (price * quantity).toFixed(2) + "€";
    return sum;
  }

  static calcItemTotal(basket) {
    const total = basket.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    return total.toFixed(2) + "€";
  }

  static calcTotalEverything(basket) {
    const itemsTotal = basket.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    const totalWithDelivery = itemsTotal + 5;
    return totalWithDelivery.toFixed(2) + "€";
  }
}
