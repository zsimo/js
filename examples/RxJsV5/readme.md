- Emit the number 7, then complete [(see)](http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#static-method-defer)
    ```js
    // without startWith, the next callback should not be fired
    var result = Rx.Observable.empty().startWith(7);
    result.subscribe(x => console.log("NEXT " + x), null, x => console.log("complete"));
    ```


- ECreates an Observable from an Array or an iterable object [(see)](http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#static-method-never)
    ```js
    var result = Rx.Observable.from([10, 20, 30]);
    result.subscribe(x => console.log(x));
    ```

- Sequence of async functions passing through each steps results
    ```js
    const example = Rx.Observable.of("a")
       .flatMap(function (i) {
            return Rx.Observable.create(function (observer) {
              setTimeout(function () {
                console.log(i);
                observer.next(i + "a");
                observer.complete();
              }, 500);
            });
        })
       .flatMap(function (i) {
            return Rx.Observable.create(function (observer) {
              setTimeout(function () {
                console.log(i);
                observer.next(i + "a");
                observer.complete();
              }, 500);
            });
        });
    const subscribe = example.subscribe({
      next: (i) => console.log(i),
      complete: () => console.log('Complete!')
    });
    ```
    
- Dynamically create a sequence of sync operation starting from an array
    ```js
    var observablesArray$ = [1, 2, 3].map(function (item) {

        return Rx.Observable.create(function (observer) {
          
              setTimeout(function () {
                 observer.next(item);
                 observer.complete();   
              }, 500);

        });
    });

    /**
     * use the spread operator (...) to change from an array to a sequence of parameters
     */
    Rx.Observable.concat(...observablesArray$)
    .subscribe({
      next: (i) => console.log(i),
      complete: () => console.log('Complete!')
    });
    ```

