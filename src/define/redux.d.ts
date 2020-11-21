namespace Redux {
  type Action<T> = {
    type: T;
    payload?: string;
  };
}
