// import { api } from "../api/apiSlice";

// export const itemApi = api.injectEndpoints({
//     endpoints: (builder) => ({
//         createItem: builder.mutation<Item, Partial<Item>>({
//             query: (data) => ({ url: '/api/itemSection', method: 'POST', body: data }),
//         }),
//         uploadItemImage: builder.mutation<void, FormData>({
//             query: (formData) => ({ url: '/api/itemSection/images', method: 'POST', body: formData }),
//         }),
//         readItem: builder.query<Item[], void>({
//             query: () => '/api/itemSection',
//         }),
//         updateItem: builder.mutation<Item, { id: string, data: Partial<Item> }>({
//             query: ({ id, data }) => ({ url: `/api/itemSection/${id}`, method: 'PATCH', body: data }),
//         }),
//         changeItemImage: builder.mutation<void, { formData: FormData, oldImage: string }>({
//             query: ({ formData, oldImage }) => ({ url: `/api/itemSection/update/${oldImage}`, method: 'POST', body: formData }),
//         }),
//         deleteItem: builder.mutation<void, string>({
//             query: (id) => ({ url: `/api/itemSection/${id}`, method: 'DELETE' }),
//         }),
//         deleteItemImage: builder.mutation<void, string>({
//             query: (filename) => ({ url: `/api/itemSection/deleteImages/${filename}`, method: 'DELETE' }),
//         }),
//     }),
//     overrideExisting: true,
// });

// export const {
//     useCreateItemMutation,
//     useUploadItemImageMutation,
//     useReadItemQuery,
//     useUpdateItemMutation,
//     useChangeItemImageMutation,
//     useDeleteItemMutation,
//     useDeleteItemImageMutation,
// } = itemApi;