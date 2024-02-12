let app = new Vue({
    el: '#app',
    data: {
        product: "Socks",
        image: "./assets/vmSocks-green-onWhite.jpg",
        altText: "A pair of socks",
        inStock: true,
        details: ['80% cotton', '20% polyester', 'Gender-neutral'],
        cart: 0,
        variants: [
            {
                variantId: 2234,
                variantColor: 'green',
                variantImage: "./assets/vmSocks-green-onWhite.jpg",
            },
            {
                variantId: 2235,
                variantColor: 'blue',
                variantImage: "./assets/vmSocks-blue-onWhite.jpg",
            }
        ],
        updateProduct(variantImage) {
            this.image = variantImage
        }

    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        RemoveFromCart() {
            if (this.cart > 0) {
                this.cart -= 1
            } else {
                alert('В корзине ничего нет ')
            }
        }
    },


})

