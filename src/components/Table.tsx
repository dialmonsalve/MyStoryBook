
import '../sass/components/table.scss';

export const Table = () => {
  return (
    <table className='table' >
      <thead>
        <tr>
          <th>Cliente</th>
          <th>Operación</th>
          <th>Monto</th>
          <th>Balance</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Jhon Doe</td>
          <td>Depósito</td>
          <td>$2,500.00</td>
          <td>$2,500.00</td>
        </tr>

        <tr>
          <td>Mark Finn</td>
          <td>Depósito</td>
          <td>$5,000.00</td>
          <td>$5,000.00</td>
        </tr>

        <tr>
          <td>Sam Smith</td>
          <td>Depósito</td>
          <td>$3,000.00</td>
          <td>$3,000.00</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <th>Total</th>
          <th></th>
          <th>$10,500.00</th>
          <th>$10,500.00</th>
        </tr>
      </tfoot>
    </table>
  )
}
