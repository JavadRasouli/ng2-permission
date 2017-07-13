# Angular2Validations

custom validation for Angular2 apps. 

## Install

### npm

```
npm install angular2-validations --save
```

## Usage

Import `AngularValidations` into your app's modules:

``` typescript
import {AngularValidations} from 'angular2-validations'

@NgModule({
  imports: [
    AngularValidations
  ]
})
```

## Available validations

* [`blackList`](./doc/blackListValidation.md)
* [`remoteValidation`](./doc/remoteValidation.md)

## License

[`MIT`](./LICENSE.md)