import StatisticCard from "../../UI/StatisticCard/StatisticCard"

const DashboardStatistic = ({userData}) => {
return(
    <>
    <div className="col-xl-4 col-sm-6 mb-3">
    <StatisticCard
    name="Channels"
    icon="fa-users"
    theme="bg-primary"
    data={userData.category_count}
    path="user/myChannels"
    />
    </div>

    <div className="col-xl-4 col-sm-6 mb-3">
    <StatisticCard
    name="Videos"
    icon="fa-video"
    theme="bg-warning"
    data={userData.video_count}
    path="user/myVideos"
    />
    </div>

    <div className="col-xl-4 col-sm-6 mb-3">
    <StatisticCard
    name="New Videos"
    icon="fa-cloud-upload-alt"
    theme="bg-success"
    data={userData.recent_video_count}
    path="user/myVideos"
    />
    </div> 

    </>
)
}

export default DashboardStatistic;