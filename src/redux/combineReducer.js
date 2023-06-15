import { combineReducers } from 'redux';
import { ProductsReducer } from './products/reducer';
import { SignUpReducer } from './signUp/reducer';
import { ResendEmailReducer, VerifyEmailReducer } from './verifyEmail/reducer';
import { DeleteProductReducer, EditProductReducer, SingleProductReducer } from './selectProduct/reducer';
import { LogInReducer } from './login/reducer';
import { AddCommentReducer, CommentReducer, DeleteCommentReducer, EditCommentReducer } from './comments/reducer';
import { AddProductReducer } from './addProduct/reducer';

export const Reducers = combineReducers({
  products: ProductsReducer,
  signUp: SignUpReducer,
  verify: VerifyEmailReducer,
  singleProduct: SingleProductReducer,
  logIn: LogInReducer,
  comments: CommentReducer,
  resend: ResendEmailReducer,
  addProduct: AddProductReducer,
  addComment: AddCommentReducer,
  editComment: EditCommentReducer,
  editProduct: EditProductReducer,
  deleteProduct: DeleteProductReducer,
  deleteComment: DeleteCommentReducer
});
