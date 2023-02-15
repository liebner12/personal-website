import Giscus from '@giscus/react';

export const PostFooter = ({ title }: { title: string }) => {
  return (
    <div className="border-t-2 border-grey-800 pt-16" id="comments">
      <Giscus
        id="comments"
        repo="liebner12/personal-website"
        repoId="R_kgDOG77VHA"
        category="General"
        categoryId="DIC_kwDOG77VHM4CUJds"
        mapping="specific"
        term={title}
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="dark"
        lang="en"
        loading="lazy"
      />
    </div>
  );
};
