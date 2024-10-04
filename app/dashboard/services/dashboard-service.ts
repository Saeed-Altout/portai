import { AxiosResponse } from 'axios';

import { _axios } from '@/lib/axios';

export const dashboardService = {
	async updateUserProfile(data: UpdateUserProfileBody): Promise<UpdateUserProfileResponse> {
		try {
			const response: AxiosResponse<UpdateUserProfileResponse> = await _axios.post(
				process.env.NEXT_PUBLIC_USER_PROFILE_ENDPOINT!,
				data
			);
			return response.data;
		} catch (error) {
			throw error;
		}
	},

	async getUserProfile(): Promise<UserProfile> {
		try {
			const response: AxiosResponse<UserProfile> = await _axios.get(process.env.NEXT_PUBLIC_USER_DETAILS!);
			return response.data;
		} catch (error) {
			throw error;
		}
	},
};
