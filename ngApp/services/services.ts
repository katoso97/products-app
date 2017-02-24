namespace productsapp.Services {
export class ProductService {
  private ProductResource;

  constructor($resource:ng.resource.IResourceService) {
    this.ProductResource = $resource('/api/products/:id')
  }

  public get(id) {
    return this.ProductResource.get({id: id});
  }
  public getAll() {
    return this.ProductResource.query();
  }
  public save(product) {
    return this.ProductResource.save(product).$promise;
  }
  public remove(id) {
    return this.ProductResource.remove({id:id}).$promise;
  }

}
angular.module('productsapp').service('productService', ProductService);
    }
