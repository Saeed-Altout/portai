import { AxiosResponse } from 'axios';

import { _axios } from '@/lib/axios';

export const websiteService = {
	async sendContactMessage(data: SendContactMessageBody): Promise<SendContactMessageResponse> {
		try {
			const response: AxiosResponse<SendContactMessageResponse> = await _axios.post<SendContactMessageResponse>(
				process.env.NEXT_PUBLIC_CONTACT_MESSAGE_ENDPOINT!,
				data
			);
			return response.data;
		} catch (error) {
			throw error;
		}
	},
	async getAllFaqs(): Promise<RootObj<Faq[]>> {
		try {
			const response: AxiosResponse<RootObj<Faq[]>> = await _axios.get(process.env.NEXT_PUBLIC_ALL_FAQ_ENDPOINT!);
			return response.data;
		} catch (error) {
			throw error;
		}
	},
	async getFaqs(): Promise<RootObj<Faq[]>> {
		try {
			const response: AxiosResponse<RootObj<Faq[]>> = await _axios.get(process.env.NEXT_PUBLIC_FAQ_ENDPOINT!);
			return response.data;
		} catch (error) {
			throw error;
		}
	},
	async getOffers(): Promise<RootObj<Offer[]>> {
		try {
			const response: AxiosResponse<RootObj<Offer[]>> = await _axios.get(process.env.NEXT_PUBLIC_OFFERS!);
			return response.data;
		} catch (error) {
			throw error;
		}
	},
	async getFeaturesOffers(): Promise<FeaturesOffers> {
		try {
			const response: AxiosResponse<FeaturesOffers> = await _axios.get(process.env.NEXT_PUBLIC_FEATURES_OFFERS!);
			return response.data;
		} catch (error) {
			throw error;
		}
	},
};
