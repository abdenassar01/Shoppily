import { useQuery } from "react-query"
import { extended } from "../../../utils/axios/axois";
import { Wrapper, Table, Thead, Td, Tr, Tbody } from "./styles/Styles"
import { PrimaryLink } from "../../../utils";

const Order = () => {

  const { isLoading, error, data } = useQuery("fetchOrders", async () => {
    const result = await extended.get("/order/me/orders", {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    })
    console.log(result)
    return result.data
  });

  return (
    <Wrapper>
        <Table>
          <Thead>
            <Tr>
              <Td>id</Td>
              <Td>address</Td>
              <Td>status</Td>
              <Td>date</Td>
              <Td>total</Td>
            </Tr>  
          </Thead>
          <Tbody>
            
              {
                data?.map(order => (
                  <Tr key={ order.id } >
                    <Td>{ order.id }</Td>
                    <Td>{ order.address }</Td>
                    <Td>{ order.order_status }</Td>
                    <Td>{ order.date_created }</Td>
                    <Td>{ order.total }</Td>
                    <Td>
                      <PrimaryLink to={`/order/${order.id}`}>See details</PrimaryLink>
                    </Td>
                  </Tr>
                ))
              }
           
          </Tbody>
        </Table>
    </Wrapper>
  )
}

export default Order