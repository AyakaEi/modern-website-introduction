'use client';

import { useFormState } from 'react-dom';
import styles from './index.module.css';
import { createContactData } from '@/app/_action/contact';

const initialState = {
  status: '',
  message: '',
};

export default function ContactForm() {
  const [state, formAction] = useFormState(createContactData, initialState);
  console.log(state);

  if (state.status === 'success') {
    return (
      <p className={styles.success}>
        お問い合わせいただきありがとうございます。
        <br />
        お返事まで今しばらくお待ちください。
      </p>
    );
  }
  return (
    <form className={styles.form} action={formAction}>
      <div className={styles.horizontal}>
        <div className={styles.item}>
          <label className={styles.label} htmlFor="lastname">
            性
          </label>
          <input type="text" name="lastname" id="lastname" className={styles.textfield} />
        </div>
        <div className={styles.item}>
          <label className={styles.label} htmlFor="firstname">
            名
          </label>
          <input type="text" name="firstname" id="firstname" className={styles.textfield} />
        </div>
      </div>
      <div className={styles.item}>
        <label className={styles.label} htmlFor="company">
          会社名
        </label>
        <input type="text" name="company" id="company" className={styles.textfield} />
      </div>
      <div className={styles.item}>
        <label className={styles.label} htmlFor="email">
          メールアドレス
        </label>
        <input type="email" name="email" id="email" className={styles.textfield} />
      </div>
      <div className={styles.item}>
        <label className={styles.label} htmlFor="message">
          メッセージ
        </label>
        <textarea name="message" id="message" className={styles.textfield} />
      </div>
      <div className={styles.actions}>
        {state.status === 'error' && <p className={styles.error}>{state.message}</p>}
        <input type="submit" value="送信する" className={styles.button} />
      </div>
    </form>
  );
}
