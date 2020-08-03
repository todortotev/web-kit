const handleMouseleave = (allowedRef: any, callback: Function) => (event: MouseEvent) => {
  try {
    if (
      allowedRef && allowedRef.current &&
      !allowedRef.current.contains(event.relatedTarget)
    ) {
      callback();
    }
  } catch (e) {
    return e;
  }
};

export default handleMouseleave;
