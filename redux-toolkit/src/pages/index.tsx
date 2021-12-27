import React from 'react';
import styles from './index.css';
import { AppDispatch, TRootState } from '@/store';
import { connect, ConnectedProps } from 'react-redux';
import { userInfoReducerActions, TMainPageState } from '@/layouts/store';

const connector = connect(
  (state: TRootState) => {
    return {
      users: state.users,
    };
  },
  dispatch => ({ dispatch: dispatch as AppDispatch }),
  null,
  { forwardRef: true },
);
const Index: React.FC<ConnectedProps<typeof connector> & {}> = props => {
  const changeMail = () => {
    props.dispatch(userInfoReducerActions.setUserInfo({ mail: 'lujiehui' } as TMainPageState));
  };

  return (
    <div className={styles.normal}>
      <div className={styles.welcome} />
      <ul className={styles.list}>
        <li>
          To get started, edit <code>src/pages/index.js</code> and save to reload.
        </li>
        <div onClick={changeMail}>点我</div>
        <li>{props.users.userInfo.mail}</li>
      </ul>
    </div>
  );
};

export default connector(Index);
