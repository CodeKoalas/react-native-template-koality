import { AsyncStorage } from 'react-native';
import { persistStore } from 'redux-persist';

import { actionCreators } from '../ducks/hydration';

import ReduxPersist from '../config/ReduxPersist';

const { endHydration } = actionCreators;

const updateReducers = store => {
  const reducerVersion = ReduxPersist.reducerVersion;
  const config = ReduxPersist.storeConfig;
  // Check to ensure latest reducer version
  AsyncStorage.getItem('reducerVersion')
    .then(localVersion => {
      if (localVersion !== reducerVersion) {
        // Purge store
        persistStore(store, config, () => {
          store.dispatch(endHydration());
        }).purge();
        AsyncStorage.setItem('reducerVersion', reducerVersion);
      } else {
        persistStore(store, config, () => {
          store.dispatch(endHydration());
        });
      }
    })
    .catch(() => {
      persistStore(store, config, () => {
        store.dispatch(endHydration());
      });
      AsyncStorage.setItem('reducerVersion', reducerVersion);
    });
};

export default { updateReducers };
