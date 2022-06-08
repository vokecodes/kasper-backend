const successResponse = (data?: any, message = 'Success') => {
  return {
    success: true,
    data,
    message
  }
}


const errorResponse = (error: any) => {
  return {
    success: false,
    error,
  }
}

export {
  successResponse,
  errorResponse
}