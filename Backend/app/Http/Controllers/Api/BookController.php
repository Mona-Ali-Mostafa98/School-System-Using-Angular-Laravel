<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\BookRequest;
use App\Models\Book;

class BookController extends Controller
{

    public function index()
    {
        $books = Book::where('status', 'available')
            ->orderBy("id", "DESC")
            ->get();
        // return BookResource::collection($books);
        return response()->json($books , 200) ;
    }


    public function store(BookRequest $request)
    {
        $data = $request->except('_method' , '_token');
        $book = Book::create($data);
        return response()->json(["message"=> "Book added successfully", "book"=>$book]);
    }

    public function show(string $id)
    {
        $book = Book::findOrFail($id);
        return response()->json($book , 200) ;
    }

    public function update(BookRequest $request, string $id)
    {
        $book = Book::findOrFail($id);
        $data = $request->except('_token');
        $book->update($data);
        return response()->json(["message"=> "Book updated successfully", "book"=>$book]);
    }


    public function destroy(string $id)
    {
        $book = Book::findOrFail($id);
        $book->delete();

        return response()->json(["message"=> "Book deleted successfully", "book"=>$book]);
    }
}
