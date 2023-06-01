import React from "react";

import { Icon } from "@iconify/react";

const IdeaAttachedFiles = () => {
  return (
    <div className="IdeaAttachedFiles">
      <div className="containerFirst">
        <h5>Description</h5>
        <div>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic cum
          praesentium amet velit odio perferendis sunt. Commodi iusto fugit vero
          incidunt numquam animi quo impedit deleniti magni culpa, sed in
          consectetur veritatis molestias ut dolorum? Cupiditate repellat
          necessitatibus repudiandae atque voluptates, molestias vitae labore
          nam, omnis, dolores quae facilis mollitia nostrum dicta fugiat.
          Asperiores dignissimos quas blanditiis eos nam quasi quibusdam non.
          Soluta temporibus omnis necessitatibus beatae non repudiandae id
          quibusdam sit ex cupiditate saepe quos tempore molestiae, autem qui
          facere fugiat libero. Praesentium minima saepe esse voluptas officiis
          fugit corporis explicabo totam laborum dolorem ipsum voluptates,
          aperiam eveniet nihil.
        </div>
      </div>
      <div className="containerFirst">
        <h5>Attached Files</h5>
        <div className="attached">
          <div className="eachAttached">
            <div>
              <button>Download</button>
            </div>
            <div>
              <Icon icon="bxs:file-pdf" color="red" width={35} />
              <span>File1.pdf</span>
            </div>
          </div>
          <div className="eachAttached">
            <div>
              <button>Download</button>
            </div>
            <div>
              <Icon
                icon="ant-design:file-jpg-outlined"
                color="blue"
                width={35}
              />
              <span>image.png</span>
            </div>
          </div>
          <div className="eachAttached">
            <div>
              <button>Download</button>
            </div>
            <div>
              <Icon
                icon="ant-design:file-jpg-outlined"
                color="blue"
                width={35}
              />
              <span>image.png</span>
            </div>
          </div>
          <div className="eachAttached">
            <div>
              <button>Download</button>
            </div>
            <div>
              <Icon icon="teenyicons:doc-solid" color="blue" width={35} />
              <span>document.doc</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdeaAttachedFiles;
