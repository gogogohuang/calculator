// extending APIResponse.Response from SDK
namespace APIResponse {
  interface Response<T> {
    data: T;
  }
}
