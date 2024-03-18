import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getReviews, createReview } from "../../api/products";
import { CommentType } from "../../types/Product";

type CommentState = {
  items: CommentType[],
  loaded: boolean,
  hasError: string | null,
};

const commentState: CommentState = {
  items: [],
  loaded: true,
  hasError: null,
};

export const commentsInit = createAsyncThunk<CommentType[], number>(
  'comments/fetch',
  async (productId: number) => {
    const response = await getReviews(productId);
    return response as unknown as CommentType[];
  }
);

// export const commentsInit = createAsyncThunk<CommentType>('comments/fetch', (productId: number) => {
//   return getReviews(productId);
// })

export const addComment = createAsyncThunk<CommentType, CommentType>('comments/add',
    async (comment: CommentType) => {
      const response = await createReview(comment);
      return response as CommentType;
    }
  );

// export const addComment = createAsyncThunk<CommentType, CommentType>('comments/add', (product: CommentType) => {
//   console.log(product);

//   return createReview(product);

// })

const commentsSlice = createSlice({
  name: 'comments',
  initialState: commentState,
  reducers: {
    commentPush: (state, action: PayloadAction<CommentType>) => {
      state.items.push(action.payload);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(commentsInit.pending, (state) => {
      state.loaded = true;
    });
    builder.addCase(commentsInit.fulfilled, (state, action) => {
      state.items = action.payload;
      state.loaded = false;
    });
    builder.addCase(commentsInit.rejected, (state) => {
      state.loaded = false;
      state.hasError = 'Error';
    });
      builder.addCase(addComment.pending, (state) => {
      state.loaded = true;
    });
    builder.addCase(addComment.fulfilled, (state, action) => {
      state.items.push(action.payload);
      state.loaded = false;
    });
    builder.addCase(addComment.rejected, (state) => {
      state.loaded = false;
      state.hasError = 'Error';
    });
  }
});

export const {
  commentPush
} = commentsSlice.actions;

export default commentsSlice.reducer;