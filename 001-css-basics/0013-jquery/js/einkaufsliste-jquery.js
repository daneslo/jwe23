let myList = ['brot', 'senf', 'ketchup'];

//Wenn das cookie für die "product_list" existiert, dann befülle das Array mit den Produkt aus dem cookie
if(Cookies.get('product_list')!=='undefined'){
    /*
    die liste kommt als komma-separierter String angelifiert, 
    daher muss dieser wieder
    */
    myList = Cookies.get('product_list').split(",");
}


//Ausgabe der Eintrage, der Produkt die bereits in die liste hinzufügt wurden
//same as myList.forEach(...);
$(myList).each(function (i, product){
    console.log(product);

});
const addNewProduct = function () {
    myList.push($("#new-product").val());
    Cookies.set('product_list', myList, {expires: 365});
    prependNewProduct(myList.length-1, myList[myList.length-1])
    $('#new-product').val("").focus();
};



$('#add-product').on('click', addNewProduct);
$('#new-product').on('keyup', function (e) {
    console.log(e.keyCode);
    //enter wurde gedrückt
    if(e.keyCode == 13) {
        addNewProduct();
    }
});
const prependNewProduct = function (index, product) {
    $('#product-list').prepend(`
            
    <div class="form-check" data-product-id="${index}">
                <input class="form-check-input" type="checkbox"
                value="${product}" 
                id="product-${index}"
                
                />
                <label 
                class="form-check-label" 
                for="product-${index}">
                  ${product}
                </label>
                </div>
    `);
};
const createProductList = function() {
    $(myList).each(prependNewProduct);
};
createProductList();

/*javascript

myList.forEach (function (product){
    console.log(product);
});
*/

