function Concatinate() {
    var one = [1, 2, 3, 4];
    var two = [5, 6, 7, 8];
    function concatinated(){
        document.getElementById("result").innerHTML = one.concat(two);
    }
    return (
        <div>
            <h1>Array One : {one.join(", ")}</h1>
            <h1>Array Two : {two.join(", ")}</h1>
            <h1 id = "result"></h1>     
            <button onClick={concatinated}>Concatinate Arrays</button>
        </div>
    );
}
