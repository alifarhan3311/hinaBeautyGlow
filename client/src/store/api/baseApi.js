import { createApi } from '@reduxjs/toolkit/query/react';
import axiosInstance from '@/lib/api';

// ─── Axios Base Query ─────────────────────────────────────────────────────────
const axiosBaseQuery =
  ({ baseUrl } = { baseUrl: '' }) =>
  async ({ url, method = 'GET', data, params, headers } = {}) => {
    try {
      const result = await axiosInstance({
        url:    baseUrl + url,
        method,
        data,
        params,
        headers,
      });
      return { data: result.data };
    } catch (error) {
      const axiosError = error;
      return {
        error: {
          status:  axiosError.response?.status,
          message: axiosError.response?.data?.message ?? axiosError.message,
          data:    axiosError.response?.data,
        },
      };
    }
  };

// ─── Base API ─────────────────────────────────────────────────────────────────
export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery:   axiosBaseQuery({ baseUrl: '/api/v1' }),
  tagTypes: [
    'Appointment',
    'Service',
    'Package',
    'Testimonial',
    'FAQ',
    'Contact',
    'Gallery',
    'Auth',
    'Content',
  ],

  endpoints: (builder) => ({
    // ── AUTH ────────────────────────────────────────────────────────────────
    login: builder.mutation({
      query: (credentials) => ({
        url:    '/auth/login',
        method: 'POST',
        data:   credentials,
      }),
      invalidatesTags: ['Auth'],
    }),

    logout: builder.mutation({
      query: () => ({
        url:    '/auth/logout',
        method: 'POST',
      }),
      invalidatesTags: ['Auth'],
    }),

    refreshToken: builder.mutation({
      query: (refreshToken) => ({
        url:    '/auth/refresh',
        method: 'POST',
        data:   { refreshToken },
      }),
    }),

    getMe: builder.query({
      query: () => ({ url: '/auth/me' }),
      providesTags: ['Auth'],
    }),

    // ── APPOINTMENTS ────────────────────────────────────────────────────────
    getAppointments: builder.query({
      query: (params) => ({ url: '/appointments', params }),
      providesTags: (result) =>
        result?.data
          ? [
              ...result.data.map(({ _id }) => ({ type: 'Appointment', id: _id })),
              { type: 'Appointment', id: 'LIST' },
            ]
          : [{ type: 'Appointment', id: 'LIST' }],
    }),

    getAppointment: builder.query({
      query: (id) => ({ url: `/appointments/${id}` }),
      providesTags: (_r, _e, id) => [{ type: 'Appointment', id }],
    }),

    createAppointment: builder.mutation({
      query: (body) => ({
        url:    '/appointments',
        method: 'POST',
        data:   body,
      }),
      invalidatesTags: [{ type: 'Appointment', id: 'LIST' }],
    }),

    updateAppointment: builder.mutation({
      query: ({ id, ...patch }) => ({
        url:    `/appointments/${id}`,
        method: 'PATCH',
        data:   patch,
      }),
      invalidatesTags: (_r, _e, { id }) => [{ type: 'Appointment', id }],
    }),

    deleteAppointment: builder.mutation({
      query: (id) => ({
        url:    `/appointments/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Appointment', id: 'LIST' }],
    }),

    getAvailableSlots: builder.query({
      query: ({ serviceId, date }) => ({
        url:    '/appointments/slots',
        params: { serviceId, date },
      }),
    }),

    // ── SERVICES ────────────────────────────────────────────────────────────
    getServices: builder.query({
      query: (params) => ({ url: '/services', params }),
      providesTags: (result) =>
        result?.data
          ? [
              ...result.data.map(({ _id }) => ({ type: 'Service', id: _id })),
              { type: 'Service', id: 'LIST' },
            ]
          : [{ type: 'Service', id: 'LIST' }],
    }),

    getService: builder.query({
      query: (slugOrId) => ({ url: `/services/${slugOrId}` }),
      providesTags: (_r, _e, id) => [{ type: 'Service', id }],
    }),

    createService: builder.mutation({
      query: (body) => ({ url: '/services', method: 'POST', data: body }),
      invalidatesTags: [{ type: 'Service', id: 'LIST' }],
    }),

    updateService: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `/services/${id}`, method: 'PATCH', data: patch,
      }),
      invalidatesTags: (_r, _e, { id }) => [{ type: 'Service', id }],
    }),

    deleteService: builder.mutation({
      query: (id) => ({ url: `/services/${id}`, method: 'DELETE' }),
      invalidatesTags: [{ type: 'Service', id: 'LIST' }],
    }),

    // ── PACKAGES ────────────────────────────────────────────────────────────
    getPackages: builder.query({
      query: (params) => ({ url: '/packages', params }),
      providesTags: [{ type: 'Package', id: 'LIST' }],
    }),

    getPackage: builder.query({
      query: (id) => ({ url: `/packages/${id}` }),
      providesTags: (_r, _e, id) => [{ type: 'Package', id }],
    }),

    createPackage: builder.mutation({
      query: (body) => ({ url: '/packages', method: 'POST', data: body }),
      invalidatesTags: [{ type: 'Package', id: 'LIST' }],
    }),

    updatePackage: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `/packages/${id}`, method: 'PATCH', data: patch,
      }),
      invalidatesTags: (_r, _e, { id }) => [{ type: 'Package', id }],
    }),

    deletePackage: builder.mutation({
      query: (id) => ({ url: `/packages/${id}`, method: 'DELETE' }),
      invalidatesTags: [{ type: 'Package', id: 'LIST' }],
    }),

    // ── TESTIMONIALS ────────────────────────────────────────────────────────
    getTestimonials: builder.query({
      query: (params) => ({ url: '/testimonials', params }),
      providesTags: [{ type: 'Testimonial', id: 'LIST' }],
    }),

    createTestimonial: builder.mutation({
      query: (body) => ({ url: '/testimonials', method: 'POST', data: body }),
      invalidatesTags: [{ type: 'Testimonial', id: 'LIST' }],
    }),

    updateTestimonial: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `/testimonials/${id}`, method: 'PATCH', data: patch,
      }),
      invalidatesTags: [{ type: 'Testimonial', id: 'LIST' }],
    }),

    deleteTestimonial: builder.mutation({
      query: (id) => ({ url: `/testimonials/${id}`, method: 'DELETE' }),
      invalidatesTags: [{ type: 'Testimonial', id: 'LIST' }],
    }),

    // ── FAQS ────────────────────────────────────────────────────────────────
    getFAQs: builder.query({
      query: (params) => ({ url: '/faqs', params }),
      providesTags: [{ type: 'FAQ', id: 'LIST' }],
    }),

    createFAQ: builder.mutation({
      query: (body) => ({ url: '/faqs', method: 'POST', data: body }),
      invalidatesTags: [{ type: 'FAQ', id: 'LIST' }],
    }),

    updateFAQ: builder.mutation({
      query: ({ id, ...patch }) => ({
        url: `/faqs/${id}`, method: 'PATCH', data: patch,
      }),
      invalidatesTags: [{ type: 'FAQ', id: 'LIST' }],
    }),

    deleteFAQ: builder.mutation({
      query: (id) => ({ url: `/faqs/${id}`, method: 'DELETE' }),
      invalidatesTags: [{ type: 'FAQ', id: 'LIST' }],
    }),

    // ── CONTACTS ────────────────────────────────────────────────────────────
    getContacts: builder.query({
      query: (params) => ({ url: '/contacts', params }),
      providesTags: [{ type: 'Contact', id: 'LIST' }],
    }),

    submitContact: builder.mutation({
      query: (body) => ({ url: '/contacts', method: 'POST', data: body }),
      invalidatesTags: [{ type: 'Contact', id: 'LIST' }],
    }),

    deleteContact: builder.mutation({
      query: (id) => ({ url: `/contacts/${id}`, method: 'DELETE' }),
      invalidatesTags: [{ type: 'Contact', id: 'LIST' }],
    }),

    // ── GALLERY ─────────────────────────────────────────────────────────────
    getGallery: builder.query({
      query: (params) => ({ url: '/gallery', params }),
      providesTags: [{ type: 'Gallery', id: 'LIST' }],
    }),

    uploadGalleryImage: builder.mutation({
      query: (formData) => ({
        url:     '/gallery',
        method:  'POST',
        data:    formData,
        headers: { 'Content-Type': 'multipart/form-data' },
      }),
      invalidatesTags: [{ type: 'Gallery', id: 'LIST' }],
    }),

    deleteGalleryImage: builder.mutation({
      query: (id) => ({ url: `/gallery/${id}`, method: 'DELETE' }),
      invalidatesTags: [{ type: 'Gallery', id: 'LIST' }],
    }),

    // ── CONTENT ─────────────────────────────────────────────────────────────
    getContent: builder.query({
      query: (section) => ({ url: `/content/${section}` }),
      providesTags: (_r, _e, section) => [{ type: 'Content', id: section }],
    }),

    updateContent: builder.mutation({
      query: ({ section, ...body }) => ({
        url:    `/content/${section}`,
        method: 'PUT',
        data:   body,
      }),
      invalidatesTags: (_r, _e, { section }) => [{ type: 'Content', id: section }],
    }),
  }),
});

// ─── Export Hooks ─────────────────────────────────────────────────────────────
export const {
  // Auth
  useLoginMutation,
  useLogoutMutation,
  useRefreshTokenMutation,
  useGetMeQuery,

  // Appointments
  useGetAppointmentsQuery,
  useGetAppointmentQuery,
  useCreateAppointmentMutation,
  useUpdateAppointmentMutation,
  useDeleteAppointmentMutation,
  useGetAvailableSlotsQuery,

  // Services
  useGetServicesQuery,
  useGetServiceQuery,
  useCreateServiceMutation,
  useUpdateServiceMutation,
  useDeleteServiceMutation,

  // Packages
  useGetPackagesQuery,
  useGetPackageQuery,
  useCreatePackageMutation,
  useUpdatePackageMutation,
  useDeletePackageMutation,

  // Testimonials
  useGetTestimonialsQuery,
  useCreateTestimonialMutation,
  useUpdateTestimonialMutation,
  useDeleteTestimonialMutation,

  // FAQs
  useGetFAQsQuery,
  useCreateFAQMutation,
  useUpdateFAQMutation,
  useDeleteFAQMutation,

  // Contacts
  useGetContactsQuery,
  useSubmitContactMutation,
  useDeleteContactMutation,

  // Gallery
  useGetGalleryQuery,
  useUploadGalleryImageMutation,
  useDeleteGalleryImageMutation,

  // Content
  useGetContentQuery,
  useUpdateContentMutation,
} = baseApi;
