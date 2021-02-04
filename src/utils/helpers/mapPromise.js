
export async function mapPromise(promise){
  let error = null;
  let result = null;
  try {
    result = await promise();
  } catch (err) {
    error = err;
  } finally {
    return [error, result];
  }
}
