class ApiError extends Error { 
    code: number
    data?: object
    path?: string
    constructor(message: string, code: number, data? : object, path?: string){
        super(message)
        this.message = message
        this.code = code
        this.data = data
        this.path = path
    }
}

export default ApiError
