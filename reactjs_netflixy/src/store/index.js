import configureStore from "./configureStore.dev";

const {store , persiststore} = configureStore();

export { persiststore, store as default };