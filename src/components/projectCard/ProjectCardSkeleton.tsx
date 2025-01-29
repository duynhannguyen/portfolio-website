import Skeleton from "../ReactSkeleton";

const ProjectCardSkeleton = () => {
  return (
    <div className="project-card-wrap">
      <div className="project-name-section">
        <Skeleton
          width={240}
          height={25}
          baseColor="#1c82ad"
          highlightColor="#03c988"
        />
      </div>
      <div className="card-info">
        <div className="card-image-section">
          <Skeleton
            className="card-image"
            width={"100%"}
            height={"100%"}
            baseColor="#1c82ad"
            highlightColor="#03c988"
          />
        </div>
        <div className="card-description-section">
          <p className="card-description">
            <Skeleton
              width={"100%"}
              height={50}
              borderRadius={10}
              baseColor="#1c82ad"
              highlightColor="#03c988"
            />
          </p>
          <div className="card-button">
            <Skeleton
              className="source-code-btn"
              width={100}
              height={31}
              baseColor="#1c82ad"
              highlightColor="#03c988"
            />
            <Skeleton
              className="live-btn"
              width={100}
              height={31}
              baseColor="#1c82ad"
              highlightColor="#03c988"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardSkeleton;
