import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { Row } from "../components/Row";
import { users } from "../users";
import { Column } from "../components/Column";

const SORT = "sort";
const ORDER = "order";
const ID_MIN_WIDTH = 30;

const AdditionalInfo = ({ param, value }) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div>{param}</div>
      <code>
        <b>{` "${value}"`}</b>
      </code>
    </div>
  );
};

export const Items = ({ history, location }) => {
  const searchParams = new URLSearchParams(location.search);

  const sortSearchParam = searchParams.get(SORT);
  const orderSearchParam = searchParams.get(ORDER);

  const setSortParamAndPush = (sort) => {
    searchParams.set(SORT, sort);
    if (orderSearchParam && orderSearchParam === "ASC") {
      searchParams.set(ORDER, "DESC");
    } else if (orderSearchParam && orderSearchParam === "ASC") {
      searchParams.set(ORDER, "DESK");
    } else {
      searchParams.set(ORDER, "ASC");
    }
    history.push({
      pathname: location.pathname,
      search: searchParams.toString(),
    });
  };

  const sortHandler = (a, b) => {
    if (sortSearchParam) {
      const aValue = a[sortSearchParam];
      const bValue = b[sortSearchParam];

      if (aValue > bValue) {
        return orderSearchParam === "ASC" ? 1 : -1;
      }
      if (aValue < bValue) {
        return orderSearchParam === "ASC" ? -1 : 1;
      }
    }
    return 0;
  };

  return (
    <>
      <button onClick={() => setSortParamAndPush("id")}>Sort by ID</button>
      <button onClick={() => setSortParamAndPush("firstName")}>
        Sort by FIRST NAME
      </button>
      <button onClick={() => setSortParamAndPush("lastName")}>
        Sort by LAST NAME
      </button>
      <Row hoverColor="#fad800">
        <Column
          minWidth={ID_MIN_WIDTH}
          onClick={() => setSortParamAndPush("id")}
        >
          id
        </Column>
        <Column onClick={() => setSortParamAndPush("firstName")}>
          first name
        </Column>
        <Column onClick={() => setSortParamAndPush("lastName")}>
          last name
        </Column>
      </Row>
      {users.sort(sortHandler || undefined).map((user) => {
        return (
          <Row
            hoverColor="#ffb3b3"
            key={user.id}
            onClick={() => {
              history.push(`/items/${user.id}`);
            }}
          >
            <Column minWidth={ID_MIN_WIDTH}>{user.id}</Column>
            <Column>{user.firstName}</Column>
            <Column>{user.lastName}</Column>
          </Row>
        );
      })}
      <AdditionalInfo param="Current location:" value={location.pathname} />
      <AdditionalInfo param="Sort" value={sortSearchParam || "NULL"} />
      <AdditionalInfo param="Order" value={orderSearchParam || "NULL"} />
    </>
  );
};
