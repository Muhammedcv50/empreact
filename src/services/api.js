import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { getStorage } from './utils'


// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/api/' }),
  prepareHeaders: (headers) => {
    const idToken = getStorage("idToken")
    
    if (idToken) {
      headers.set('authorization', `Bearer ${idToken}`)
    }

    return headers
  }
   ,

  tagTypes:["EmployeeList"],
  refetchOnMountOrArgChange:true,
  endpoints: (builder) => ({
    getAllEmployees: builder.query({
      query:() => `employee`,
      providesTags:["EmployeeList"],
    }),

    getEmployeeById: builder.query({
      query:(id) => {
         return ({
          url:`employee/${id}`,
        })
      }
      
    }),

    createEmployee: builder.mutation({
        query: (data) => ({
        url: `employee`,
        method: 'POST',
        body:data,
    }),
    invalidatesTags:["EmployeeList"],

  }),
    deleteEmployee: builder.mutation({
     query(id) {
       return {
         url: `employee/${id}`,
         method: 'DELETE',
       }
    },
    invalidatesTags:["EmployeeList"],

  }),
   updateEmployee: builder.mutation({
      query(data) {
        const { id, ...body } = data
        return {
          url: `employee/${id}`,
          method: 'PUT',
          body,
        }
      },
   
   }),
   employeeLogin: builder.mutation({
    query: (data) => ({
    url: `employee/login`,
    method: 'POST',
    body:data,
}),
invalidatesTags:["EmployeeList"],
})
  })
})

 export const baseQuery = fetchBaseQuery({
  baseUrl: '/',
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token

    // If we have a token set in state, let's assume that we should be passing it.
    if (token) {
      headers.set('authorization', `Bearer ${token}`)
    }

    return headers
  },
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useGetAllEmployeesQuery,useCreateEmployeeMutation,useDeleteEmployeeMutation,useUpdateEmployeeMutation,useGetEmployeeByIdQuery,useEmployeeLoginMutation} = baseApi