const asyncHandler = (requestHandler) => {
    (req,res,next) => {
        Promise.resolve(requestHandler(req,res,next)).catch((err) =>
             next(err))
    }
}



export {asyncHandler}




//******OR *********//

// const asyncHandler = (fn) => async (req , res , next) =>  { // higer order function function as argumetnt ki trh call kre hain.
//     try {
//         await fn(req,res,next)
//     } catch (error) {
//         res.Status(err.code || 500).jason({
//             success : false ,
//             meassage : err.meassage
//         })
//     }
// }