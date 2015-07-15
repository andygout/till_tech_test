describe('Features', function() {

  var till;
  var order;
  var shopDetails;

  beforeEach(function(done) {
    till = new Till();
    order = new Order;
    till.loadDetails()
    .done(function() {
      done();
    });
  });

  describe('till can display total of order', function() {
    it('1 x Cafe Latte', function() {
      order.addItem('Cafe Latte');
      expect(till.displayTotal(order)).toEqual(4.75);
    });

    it('1 x Cafe Latte; 1 x Cappucino', function() {
      addItems(order, ['Cafe Latte', 'Cappucino']);
      expect(till.displayTotal(order)).toEqual(8.60);
    });

    it('2 x Cafe Lattes; 1 x Cappucino', function() {
      addItems(order, ['Cafe Latte', 'Cafe Latte', 'Cappucino']);
      expect(till.displayTotal(order)).toEqual(13.35);
    });
  });

  describe('till can display tax amount of order', function() {
    it('1 x Cafe Latte', function() {
      order.addItem('Cafe Latte');
      expect(till.displayTax(order)).toEqual(0.41);
    });

    it('1 x Cafe Latte; 1 x Cappucino', function() {
      addItems(order, ['Cafe Latte', 'Cappucino']);
      expect(till.displayTax(order)).toEqual(0.74);
    });

    it('2 x Cafe Lattes; 1 x Cappucino', function() {
      addItems(order, ['Cafe Latte', 'Cafe Latte', 'Cappucino']);
      expect(till.displayTax(order)).toEqual(1.15);
    });
  });

});