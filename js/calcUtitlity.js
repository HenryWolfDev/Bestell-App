export class CalcUtility {
  static calcItemSum(price, quantity) {
    const sum = (price * quantity).toFixed(2).replace(".", ",") + "€";
    return sum;
  }

  static calcItemTotal(basket) {
    const total = basket.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    return total.toFixed(2).replace(".", ",") + "€";
  }

  static calcTotalEverything(basket) {
    let totalWithDelivery = 0;

    if (basket.length > 0) {
      const itemsTotal = basket.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      totalWithDelivery = itemsTotal + 5;
      return totalWithDelivery.toFixed(2).replace(".", ",") + "€";
    } else {
      return totalWithDelivery.toFixed(2).replace(".", ",") + "€";
    }
  }
}
