describe("Snake", function() {

    describe("should appear in the middle of the screen", function() {
        it("even proportions", function() {
            game = new Snake([10, 10])
            expect(snakeHead().location).toEqual([5, 5])
        })

        snakeHead = function() {
          return game.sprites()[0];
        }

        it("odd proportions", function() {
            game = new Snake([9, 9])
            expect(snakeHead().location).toEqual([4, 4])
        })
    })
})
