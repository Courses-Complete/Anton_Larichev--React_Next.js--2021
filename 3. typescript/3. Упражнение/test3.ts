interface ITag {
	name: string,
	value: number
}

type Tags = ITag[];

interface IInfo {
	desc: string,
	isActive: boolean
}

interface IReply {
	userId: number,
	id: number,
	title: string,
	info: IInfo,
	tags: ITag[],
}