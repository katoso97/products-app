namespace productsapp.Controllers {

    export class HomeController {
        public products;
        public product;

        public save() {
          this.productService.save(this.product).then(() => {
            this.products = this.productService.getAll();
            this.product = null;
          })};
          public remove(id) {
            this.productService.remove(id)
            .then((res)=> {
              this.products = this.productService.getAll();
            })
          }

          public delete(productId) {
            this.productService.delete(productId)
            .then((res) => {
              for(let i in this.products) {
                if (productId == this.products[i].id) {
                  this.products.splice(i, 1);
                }
              }
            })
            // .catch((res) => {
            //   console.log('Oops, ya fucked up');
            //   console.dir(res);
            // })
          }
        constructor(private $state:ng.ui.IStateService,
          private $stateParams:ng.ui.IStateParamsService,
          private productService:productsapp.Services.ProductService) {
          this.products = productService.getAll();
          let productId = $stateParams['id'];
          this.product = productService.get(productId);
        }
    }
    export class EditController {
      // public products;
      public product;

      constructor(private $state:ng.ui.IStateService,
        private $stateParams:ng.ui.IStateParamsService,
        private productService:productsapp.Services.ProductService) {
          let productId = $stateParams['id'];
          this.product = productService.get(productId);
      }

      public save() {
        this.productService.save(this.product)
        .then((res) => {
          this.$state.go('home');
        })
      };
    }


    export class AboutController {
        public message = 'Hello from the about page!';
    }

}
