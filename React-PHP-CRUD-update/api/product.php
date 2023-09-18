<?php
error_reporting(E_ALL);
ini_set('display_errors',1);
header("Access-Control-Allow-Origin:* ");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

$db_conn= mysqli_connect("localhost","root", "", "reactphpCrud");
if($db_conn===false)
{
  die("ERROR: Could Not Connect".mysqli_connect_error());
}

$method = $_SERVER['REQUEST_METHOD'];
//echo "test----".$method; die;
switch($method)
{
    case "GET": 
      $path= explode('/', $_SERVER['REQUEST_URI']);

      if(isset($path[4]) && is_numeric($path[4]))
      {
        $json_array= array();
        $p_id= $path[4];
        
        $getuserrow= mysqli_query($db_conn, "SELECT * FROM product WHERE p_id='$p_id' ");
        while($userrow= mysqli_fetch_array($getuserrow))
        {
         $json_array['rowUserdata']= array('id'=>$userrow['p_id'],'ptitle'=>$userrow['ptitle'], 'pprice'=>$userrow['pprice'], 'pfile'=>$userrow['pfile'], 'pstatus'=>$userrow['pstatus'],);
        }
        echo json_encode($json_array['rowUserdata']);
        return;
        
      } else {
       //echo "return all Data"; die;
       $destination= $_SERVER['DOCUMENT_ROOT']."/React-PHP-CRUD-new/reactcrudphp"."/";
       $allproduct= mysqli_query($db_conn, "SELECT * FROM product");
       if(mysqli_num_rows($allproduct) > 0)
       {
          while($row= mysqli_fetch_array($allproduct))
          {
           $json_array["productdata"][]= array("id"=>$row['p_id'], 
           "ptitle"=>$row["ptitle"],
           "pprice"=>$row["pprice"],
           "pimage"=>$row["pfile"],
           "status"=>$row["pstatus"]
          );
          }
          echo json_encode($json_array["productdata"]);
          return;
       } else {
        echo json_encode(["result"=>"please check the Data"]);
        return;
       }


      }
      
       
    break;

    case "POST":
      if(isset($_FILES['pfile']))
      {      
        $ptitle= $_POST['ptitle'];
        $pprice= $_POST['pprice'];
        $pfile= time().$_FILES['pfile']['name'];
        $pfile_temp= $_FILES['pfile']['tmp_name'];
        $destination= $_SERVER['DOCUMENT_ROOT'].'/React-PHP-CRUD-new/reactcrudphp'."/".$pfile;

        $result= mysqli_query($db_conn,"INSERT INTO product (ptitle, pprice,pfile, pstatus)
        VALUES('$ptitle','$pprice','$pfile','1')");

        if($result)
        { 
          move_uploaded_file($pfile_temp, $destination);
          echo json_encode(["success"=>"Product Inserted Successfully"]);
           return;
        } else{
          echo json_encode(["success"=>"Product Not Inserted!"]);
           return;
        }

      } else{
        echo json_encode(["success"=>"Data not in Correct Format"]);
        return;
      }
        
    break;

    case "PUT":
    if (isset($_FILES['pfile']))
    { 
      $ptitle= $_POST['ptitle'];
      $pprice= $_POST['pprice'];
      $p_id= $_POST['id'];
      $old_pfile_name= $_POST['old_pfile_name'];
      $pfile_temp= $_FILES['pfile']['tmp_name'];
      $destination= $_SERVER['DOCUMENT_ROOT'].'/React-PHP-CRUD-new/reactcrudphp'."/".$old_pfile_name;

      $result= mysqli_query($db_conn, "UPDATE product SET ptitle='$ptitle', pprice='$pprice', pfile='$pfile', pstatus='$pstatus' WHERE id='$id'  ");

      if($result)
      { 
        move_uploaded_file($pfile_temp, $destination);
        echo json_encode(["success"=>"Product Inserted Successfully"]);
         return;
      } else{
        echo json_encode(["success"=>"Product Not Inserted!"]);
         return;
      }

    } else{
      echo json_encode(["success"=>"Data not in Correct Format"]);
      return;
    }
      // $userUpdate= json_decode(file_get_contents("php://input"));
      // print_r($userUpdate);
      //  $old_pfile_name= $userUpdate->old_pfile_name;
      //  $p_id= $userUpdate->id;
      //  $ptitle= $userUpdate->ptitle;
      //  $pprice= $userUpdate->pprice;
      //  $pfile= $userUpdate->pfile;
      //  $pstatus= $userUpdate->pstatus;
      // //  $pfile= time().$_FILES['pfile']['name'];
      //  $pfile_temp= $_FILES['pfile']['tmp_name'];
      //  $destination= $_SERVER['DOCUMENT_ROOT'].'/React-PHP-CRUD-new/reactcrudphp'."/".$old_pfile_name;

      //  $updateData= mysqli_query($db_conn, "UPDATE product SET ptitle='$ptitle', pprice='$pprice', pfile='$pfile', pstatus='$pstatus' WHERE p_id='$p_id'  ");
      //  if($updateData)
      //  {
      //   move_uploaded_file($pfile_temp, $destination);
      //    echo json_encode(["success"=>"product Record Update Successfully"]);
      //    return;
      //  } else {
      //      echo json_encode(["success"=>"Please Check the product Data!"]);
      //      return; 
      //  }

    case "DELETE":
           
    break;

          

}


?>