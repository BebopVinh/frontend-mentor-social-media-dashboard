const facebook = {
	title: "facebook",
	icon: "/images/icon-facebook.svg",
	views: { name: "Page Views", amount: "87", percentage: "3", growth: true },
	likes: { name: "Likes", amount: "52", percentage: "2", growth: false },
}

const instagram = {
	title: "instagram",
	icon: "/images/icon-instagram.svg",
	views: {
		name: "Profile Views",
		amount: "52k",
		percentage: "1375",
		growth: true,
	},
	likes: { name: "Likes", amount: "5462", percentage: "2257", growth: true },
}

const twitter = {
	title: "twitter",
	icon: "/images/icon-twitter.svg",
	views: { name: "Retweets", amount: "117", percentage: "303", growth: true },
	likes: { name: "Likes", amount: "507", percentage: "553", growth: true },
}

const youtube = {
	title: "youtube",
	icon: "/images/icon-youtube.svg",
	views: {
		name: "Total Views",
		amount: "1407",
		percentage: "12",
		growth: false,
	},
	likes: { name: "Likes", amount: "107", percentage: "19", growth: false },
}

export const overViewData = [facebook, instagram, twitter, youtube]
