"use client";

import { IActivity } from "@/app/_models/activities/IActivity";
import { Tag } from "primereact/tag";
import { Button } from "primereact/button";
import { classNames } from "primereact/utils";
import { Rating } from "primereact/rating";
import { Card } from "primereact/card";
import { DataView } from "primereact/dataview";

interface IActivityListProps {
  activities: IActivity[];
}

export default function ActivityList({ activities }: IActivityListProps) {
  const renderItem = (item: IActivity, index: number) => {
    return (
      <div key={item.id} className="col-12">
        <div
          className={classNames(
            "flex flex-column xl:flex-row xl:align-items-start p-4 gap-4",
            { "border-top-1 surface-border": index !== 0 }
          )}
        >
          <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
            <div className="flex flex-column align-items-center sm:align-items-start gap-3">
              <div className="text-2xl font-bold text-900">{item.title}</div>
              <Rating
                value={item.rating}
                readOnly
                color="yellow"
                cancel={false}
                onIcon={<i className="pi pi-star-fill text-yellow-500"></i>}
              />
              {item.tags && item.tags.length && (
                <div className="flex align-items-center gap-3">
                  <span className="flex align-items-center gap-2">
                    <i className="pi pi-tag"></i>
                    {item.tags.map((tag) => (
                      <Tag key={`${Math.random()}-${tag}`} value={tag}></Tag>
                    ))}
                  </span>
                </div>
              )}
            </div>
            <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
              <span className="text-2xl font-semibold">${item.duration}</span>
              <Button icon="pi pi-shopping-cart" className="p-button-rounded" />
            </div>
          </div>
        </div>
      </div>
    );
  };

  const listActivities = () => {
    const activityList = activities.map((activity, index) =>
      renderItem(activity, index)
    );
    return <div className="grid grid-nogutter w-full">{activityList}</div>;
  };

  return (
    <Card className="w-full shadow-none border-1 border-gray-300">
      <DataView value={activities} itemTemplate={listActivities} />
    </Card>
  );
}
