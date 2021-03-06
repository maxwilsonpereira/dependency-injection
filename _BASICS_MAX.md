# Dependency Injection with React using InversifyJS Inversion of Control Container

**react-inversify provides ways to map component's dependencies to React props**

### TUTORIAL FROM:

https://youtu.be/h_F0gUleybo
https://github.com/xipooo/reactdidemo
https://github.com/Kukkimonsuta/inversify-react

## INSTALATION:

npm install inversify inversify-react reflect-metadata

- ADD TO tsconfig.json:
  "types": ["reflect-metadata"],
  "experimentalDecorators": true,
  "emitDecoratorMetadata": true,
  "strictPropertyInitialization": false
  },

  **strictPropertyInitialization BECAUSE React doesn't allow to use constructor injection. We have to use property injection.**

### THEORY

**Examples of DI in React:**
props
function Welcome(props) {
return <h1>Hello, {props.name}</h1>
}

context
function Counter() {
const {message} = useContext(MessageContext)
return <p>Hello, {message}</p>
}

## REACT ONLY ACCEPTS PROPERTY INJECTION! NO CONSTRUCTOR INJECTION!
