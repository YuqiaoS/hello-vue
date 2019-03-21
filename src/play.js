//export the executed function 
// console.log(play) returns a -> 'hello'
export default (
    function() {
        var a = 'hello'
        console.log('execte directly');

        return a;
    }
)()

//console.log(play())
//exporting the function
// export default (
//     (x) => {
//         var a = 'hello'
//         return a;
//     }
// )

// export default{
//     a : 'hello',
//     b: 'hi'
//     //return a;

// }