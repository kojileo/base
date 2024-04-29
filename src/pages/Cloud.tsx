import { Link } from "react-router-dom";

import { cloud } from "../constants";
import { arrow } from "../assets/icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { cloudthemas } from "../constants";
import React from "react";

const Cloud = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My{" "}
        <span className="blue-gradient_text drop-shadow font-semibold">
          Cloud
        </span>{" "}
        Skill
      </h1>

      <p className="text-slate-500 mt-2 leading-relaxed">
        AzureとAWSとGCPについて身に着けた知識一覧です。
      </p>

      <div className="flex flex-wrap my-20 gap-16">
        {cloud.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={project.iconUrl}
                  alt="threads"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>

            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-500">{project.description}</p>
              <div className="mt-5 flex items-center gap-2 font-poppins">
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600"
                >
                  Live Link
                </Link>
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-4 h-4 object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="py-16">
        <h3 className="subhead-text">クラウド技術使用事例</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>クラウド技術を使用した学習事項をまとめました</p>
        </div>

        <div className="mt-12 flex">
          <VerticalTimeline>
            {cloudthemas.map((cloudthema, index) => (
              <VerticalTimelineElement
                key={cloudthema.company_name}
                date={cloudthema.date}
                iconStyle={{ background: cloudthema.iconBg }}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={cloudthema.icon}
                      alt={cloudthema.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: cloudthema.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {cloudthema.title}
                  </h3>
                  <p
                    className="text-black-500 font-medium text-base"
                    style={{ margin: 0 }}
                  >
                    {cloudthema.company_name}
                  </p>
                </div>

                <ul className="my-5 list-disc ml-5 space-y-2">
                  {cloudthema.points.map((point, index) => (
                    <li
                      key={`cloudthema-point-${index}`}
                      className="text-black-500/50 font-normal pl-1 text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
      <hr className="border-slate-200" />
    </section>
  );
};

export default Cloud;
